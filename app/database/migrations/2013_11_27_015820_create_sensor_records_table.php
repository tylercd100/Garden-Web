<?php

use Illuminate\Database\Migrations\Migration;

class CreateSensorRecordsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('sensor_records', function($table)
	    {
	        $table->increments('id');
	        $table->integer('sensor_id');
	        $table->string('type');
	        $table->integer('value');
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
		Schema::drop('sensor_records');
	}

}