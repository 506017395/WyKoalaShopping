# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2018-11-09 02:33
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Mall', '0002_goods_goods_type'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cart',
            name='is_select',
            field=models.BooleanField(default=False),
        ),
    ]