# Generated by Django 5.0 on 2023-12-14 10:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("apigateway", "0021_alter_assignment_deadline"),
    ]

    operations = [
        migrations.AlterField(
            model_name="assignment",
            name="Deadline",
            field=models.DateTimeField(default="2023-12-21 10:33:21+0000"),
        ),
    ]