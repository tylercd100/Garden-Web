<?php

use Illuminate\Database\Migrations\Migration;

class CreateDevicesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('devices', function($table)
	    {
	        $table->increments('id');
	        $table->string('name');
	        $table->string('type');
	        $table->integer('pin');
	        $table->integer('state');
	        $table->integer('max_on');
	        $table->integer('max_off');
	        $table->timestamp('last_on');
	        $table->timestamp('last_off');
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
		Schema::drop('devices');
	}

}