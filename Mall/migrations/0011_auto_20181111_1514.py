# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2018-11-11 07:14
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Mall', '0010_auto_20181111_1513'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ordergoods',
            name='goods',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Mall.Goods'),
        ),
    ]