# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2018-11-11 07:00
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Mall', '0008_auto_20181111_1431'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ordergoods',
            name='cart',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='Mall.Cart'),
        ),
    ]
