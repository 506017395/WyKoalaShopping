# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2018-11-09 17:42
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Mall', '0004_cart_total'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='uaccount',
            field=models.CharField(max_length=60, unique=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='utel',
            field=models.CharField(max_length=20, unique=True),
        ),
    ]