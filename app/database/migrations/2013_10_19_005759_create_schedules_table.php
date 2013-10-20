<?php

use Illuminate\Database\Migrations\Migration;

class CreateSchedulesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('schedules', function($table)
	    {
	        $table->increments('id');
	        $table->integer('device_id');
	        $table->integer('minute')->default(0);
	        $table->integer('hour')->default(0);
	        $table->string('day')->default(0);
	        $table->integer('date')->default(0);
	        $table->integer('month')->default(0);
	        $table->integer('duration')->default(1);
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
		Schema::drop('schedules');
	}

}