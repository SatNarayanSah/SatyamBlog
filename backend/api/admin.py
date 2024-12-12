from django.contrib import admin
from api import models as api_models

class PostAdmin(admin.ModelAdmin):
    prepopulated_fields = {"slug": ["title"]}

admin.site.register(api_models.User)
admin.site.register(api_models.Profile)
admin.site.register(api_models.Category)
admin.site.register(api_models.Post, PostAdmin)
admin.site.register(api_models.Comment)
admin.site.register(api_models.Bookmark)
admin.site.register(api_models.Notification)
