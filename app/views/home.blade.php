@extends('layout')

@section('content')
<script>

window.Meta = {};
window.Meta.devices = {{ $devices }};
window.Meta.schedules = {{ $schedules }};

</script>
<script data-main="js/backbone/main" src="js/backbone/libs/require.js"></script>
<div class="container" style="margin:40px auto;">
    <div class="row">
        <div class="col-md-2">
            <img src="img/temperature.png" class="pull-right"/>
        </div>
        <div class="col-md-4" holds="device-temperature-view">
            <h1 style="font-size:100px;">70F</h1>
        </div>
        <div class="col-md-2">
            <img src="img/hot.png" class="pull-right"/>
        </div>
        <div class="col-md-4" holds="device-heater-view">
        </div>
    </div>
    <hr>
    <div class="row">
        <div class="col-md-2">
            <img src="img/gear.png" class="pull-right"/>
        </div>
        <div class="col-md-4" holds="device-motor-view">
        </div>
        <div class="col-md-2">
            <img src="img/fan.png" class="pull-right"/>
        </div>
        <div class="col-md-4" holds="device-fan-view">
        </div>
    </div>
    <hr>
    <div class="row">
        <div class="col-md-2">
            <img src="img/sun.png" class="pull-right"/>
        </div>
        <div class="col-md-4" holds="device-light-view">
        </div>
        <div class="col-md-2">
            <img src="img/water.png" class="pull-right"/>
        </div>
        <div class="col-md-4" holds="device-pump-view">
        </div>
    </div>
    <hr>
    <div class="row">
        <div class="col-md-4">
        </div>
        <div class="col-md-4" holds="sensor-view">
        </div>
    </div>
</div>
@stop