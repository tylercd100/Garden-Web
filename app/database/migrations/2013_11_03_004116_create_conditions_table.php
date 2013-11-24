<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateConditionsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('conditions', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('type'); //value || sensor_id || comp_sensor_id
			$table->integer('device_id');
			$table->integer('sensor_id');
			$table->string('operator');// < = >
			$table->integer('value');
			$table->integer('comp_sensor_id');
			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('conditions');
	}

}

// if sensor value is >=< to set value
// if sensor value is >=< to dif sensor value