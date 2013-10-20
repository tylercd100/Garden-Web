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

        Device::create(array('pin'=>6, 'name' => 'Top Shelf', 'type' => 'light','state' => '1'));
        Device::create(array('pin'=>7, 'name' => 'Middle Shelf', 'type' => 'light','state' => '0'));
        Device::create(array('pin'=>8, 'name' => 'Top Shelf', 'type' => 'pump','state' => '0', 'max_on' => 3000));
    }


}