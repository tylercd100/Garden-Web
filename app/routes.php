<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/', function()
{
	$devices = Device::all();
	$schedules = Schedule::all();
	return View::make('home', array('devices' => $devices,'schedules' => $schedules));
});

Route::get('users', function(){
	$users = User::all();
	return View::make('users')->with('users', $users);
});

Route::resource('device','DeviceController');
Route::resource('sensor','SensorController');
Route::resource('schedule','ScheduleController');

