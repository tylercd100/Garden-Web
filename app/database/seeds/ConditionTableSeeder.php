<?php

class ConditionTableSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
    {
        DB::table('conditions')->delete();

<<<<<<< HEAD
        Condition::create(array('type'=>'value','device_id' => 1,'sensor_id' => 1,'operator' => '<','value' => 70)); //if inside temperature is less than 71 turn on light one
=======
        // Condition::create(array('type'=>'value','device_id' => 1,'sensor_id' => 1,'operator' => '>','value' => 72)); //if inside temperature is less than 71 turn on light one
>>>>>>> 74a1ab649a5d72c82d5175c571b753290c21a3fc
        // Condition::create(array('type'=>'sensor','device_id' => 2,'sensor_id' => 1,'operator' => '>','comp_sensor_id' => 2)); //if inside temperature sensor is less than outside sensor turn on heater
        // Condition::create(array('type'=>'sensor','device_id' => 3,'sensor_id' => 1,'operator' => '<','comp_sensor_id' => 2)); //if inside temperature sensor is less than outside sensor turn on heater
        // Condition::create(array('type'=>'sensor','device_id' => 4,'sensor_id' => 1,'operator' => '>','comp_sensor_id' => 2)); //if inside temperature sensor is less than outside sensor turn on heater
    }	


}
