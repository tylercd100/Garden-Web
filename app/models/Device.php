<?php 
class Device extends Eloquent {
	public function schedules()
    {
        return $this->hasMany('Schedule');
    }
    public function conditions()
    {
        return $this->hasMany('Condition');
    }
}