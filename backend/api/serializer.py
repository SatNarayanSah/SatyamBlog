from django.contrib.auth.password_validation import validate_password
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

from api import models as api_models
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['full_name'] = user.full_name
        token['email'] = user.email
        token['username'] = user.username
        return token


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = api_models.User
        fields = ["full_name", "email", "password", "password2"]

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError({"password": "Password fields didn't match."})
        return attrs

    def create(self, validated_data):
        user = api_models.User.objects.create(
            full_name=validated_data['full_name'],
            email=validated_data['email'],
        )

        email_username, _ = user.email.split('@')
        user.username = email_username

        user.set_password(validated_data['password'])
        user.save()
        return user


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = api_models.User
        fields = "__all__"


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = api_models.Profile
        fields = "__all__"


class CategorySerializer(serializers.ModelSerializer):
    post_count = serializers.SerializerMethodField()

    def get_post_count(self, category):
        return category.posts.count()

    class Meta:
        model = api_models.Category
        fields = ["id", "title", "image", "slug", "post_count"]



class CommentSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = api_models.Comment
        fields = "__all__"


class BookmarkSerializer(serializers.ModelSerializer):
    class Meta:
        model = api_models.Bookmark
        fields = "__all__"


class NotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = api_models.Notification
        fields = "__all__"


class PostSerializer(serializers.ModelSerializer):
    comments = CommentSerializer(many=True)
    class Meta:
        model = api_models.Post
        fields = "__all__"
    def __init__(self, *args, **kwargs):
        super(PostSerializer, self).__init__(*args, **kwargs)
        request = self.context.get("request")
        if request and request.method == "POST":
            self.Meta.depth = 0
        else:
            self.Meta.depth = 1


class AuthorSerializer(serializers.Serializer):
    views = serializers.IntegerField(default=0)
    posts = serializers.IntegerField(default=0)
    likes = serializers.IntegerField(default=0)
    bookmark = serializers.IntegerField(default=0)


class CategoryDetailSerializer(serializers.ModelSerializer):
    posts = PostSerializer(source="posts.all", many=True, read_only=True)

    class Meta:
        model = api_models.Category
        fields = ["id", "name", "description", "posts"]