<?php 
class Device extends Eloquent {
	public function schedules()
    {
        return $this->hasMany('Schedule');
    }
}