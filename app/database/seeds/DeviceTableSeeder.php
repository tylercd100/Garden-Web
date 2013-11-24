<?php

class DeviceTableSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
    {
        DB::table('devices')->delete();

        Device::create(array('pin'=>6,  'name' => 'Light 1',    'type' => 'light', 'state' => 0));
        Device::create(array('pin'=>7,  'name' => 'Light 2',    'type' => 'light', 'state' => 0));
        Device::create(array('pin'=>8,  'name' => 'Pump 1',     'type' => 'pump', 'state' => 0));

        // Device::create(array('pin'=>5,  'name' => 'Light 1',    'type' => 'light',  'state' => 0));
        // Device::create(array('pin'=>6,  'name' => 'Ground Fan', 'type' => 'fan',    'state' => 0));
        // Device::create(array('pin'=>7,  'name' => 'Heater',     'type' => 'heater', 'state' => 0));
        // Device::create(array('pin'=>8,  'name' => 'Light 2',    'type' => 'light',  'state' => 0));
        // Device::create(array('pin'=>9, 	'name' => 'Light 3', 	'type' => 'pump',	'state' => 0));
        // Device::create(array('pin'=>10, 'name' => 'Window 1', 	'type' => 'motor',	'state' => 0));
        // Device::create(array('pin'=>11, 'name' => 'Window 2', 	'type' => 'motor',	'state' => 0));
        // Device::create(array('pin'=>12, 'name' => 'Window 3', 	'type' => 'motor',	'state' => 0));
    }	


}