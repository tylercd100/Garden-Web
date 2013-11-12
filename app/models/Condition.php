<?php 
class Condition extends Eloquent {
	public function device()
    {
        return $this->belongsTo('Device');
    }
    public function sensor()
    {
        return $this->belongsTo('Sensor');
    }
}