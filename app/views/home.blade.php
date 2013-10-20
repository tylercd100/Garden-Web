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
        <div class="col-md-3">
            <img src="img/sun.png" class="pull-right"/>
        </div>
        <div class="col-md-9" holds="device-light-view">
        </div>
    </div>
    <hr>
    <div class="row">
        <div class="col-md-3">
            <img src="img/water.png" class="pull-right"/>
        </div>
        <div class="col-md-9" holds="device-pump-view">
        </div>
    </div>
    <hr>
    <div class="row">
        <div class="col-md-3">
        </div>
        <div class="col-md-9" holds="sensor-view">
        </div>
    </div>
</div>
@stop