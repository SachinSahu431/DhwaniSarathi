from django.contrib import admin
from .models import User, Educator, Classroom, Assignment , LoginInfo
# Register your models here.

admin.site.register(User)
admin.site.register(Educator)
admin.site.register(Classroom)
admin.site.register(Assignment)
admin.site.register(LoginInfo)
