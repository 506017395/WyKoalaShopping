# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2018-10-31 13:09
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Mall', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='token',
            field=models.CharField(max_length=256, null=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='upwd',
            field=models.CharField(max_length=256),
        ),
    ]