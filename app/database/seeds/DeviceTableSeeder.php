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

        // My Setup
        // Device::create(array('pin'=>6,'location' => 'inside',   'name' => 'Light 1',    'type' => 'light', 'state' => 0));
        // Device::create(array('pin'=>7,'location' => 'inside',   'name' => 'Light 2',    'type' => 'light', 'state' => 0));
        // Device::create(array('pin'=>8,'location' => 'inside',   'name' => 'Pump 1',     'type' => 'pump', 'state' => 0));

        // My Dad's Setup
        Device::create(array('pin'=>6, 'location' => 'inside', 'name' => 'Light 1',    'type' => 'light',  'state' => 0));
        Device::create(array('pin'=>7, 'location' => 'inside', 'name' => 'Ground Fan', 'type' => 'fan',    'state' => 0));
        Device::create(array('pin'=>8, 'location' => 'inside', 'name' => 'Heater',     'type' => 'heater', 'state' => 1));
    }	


}
