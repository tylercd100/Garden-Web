<?php

use Illuminate\Database\Migrations\Migration;

class CreateSensorsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('sensors', function($table)
	    {
	        $table->increments('id');
	        $table->string('name');
	        $table->string('location');
	        $table->string('type');
	        $table->integer('pin');
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
		Schema::drop('sensors');
	}

}