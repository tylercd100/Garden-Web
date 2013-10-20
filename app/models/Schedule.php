<?php 
class Schedule extends Eloquent {
	public function device()
    {
        return $this->belongsTo('Device');
    }
}