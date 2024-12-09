VERSION = (9, 1)

#: major.minor.patch or major.minor.devN
__version__ = ".".join([str(x) for x in VERSION])

#: Sphinx's X.Y "version"
__minor_version__ = ".".join([str(x) for x in VERSION[:2]])
