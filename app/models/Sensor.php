<?php 
class Sensor extends Eloquent {
	public function conditions()
    {
        return $this->hasMany('Condition');
    }
}