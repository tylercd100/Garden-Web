@extends('layout')

@section('content')
<script>

window.Meta = {};
window.Meta.devices = {{ $devices }};
window.Meta.schedules = {{ $schedules }};

</script>
    <div id="header-region"></div>

    <div id="main-region" class="center-block" >
    </div>

    <div id="dialog-region"></div>

    <script type="text/template" id="header-template">
      <div class="navbar-inner">
        <div class="container">
          <a class="brand" href="#devices">Garden HQ</a>
          <div class="nav-collapse collapse">
            <ul class="nav"></ul>
          </div>
        </div>
      </div>
    </script>

    <script type="text/template" id="header-link">
      <a href="#<%= url %>"><%= name %></a>
    </script>

    <script type="text/template" id="device-list">
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
      </tbody>
    </script>

    <script type="text/template" id="device-list-none">
      <td colspan="3">No devices to display.</td>
    </script>

    <script type="text/template" id="device-list-item">
      <td><%= name %></td>
      <td><%= type %></td>
      <td>
        <a href="#devices/<%= id %>" class="btn btn-small js-show">
          <i class="icon-eye-open"></i>
          Show
        </a>
        <a href="#devices/<%= id %>/edit" class="btn btn-small js-edit">
          <i class="icon-pencil"></i>
          Edit
        </a>
        <button class="btn btn-small js-delete">
          <i class="icon-remove"></i>
          Delete
        </button>
      </td>
    </script>

    <script type="text/template" id="missing-device-view">
      <div class="alert alert-error">This device doesnt exist !</div>
    </script>

    <script type="text/template" id="device-view">
      <h1><%= name %> <%= type %></h1>
      <a href="#devices/<%= id %>/edit" class="btn btn-small js-edit">
        <i class="icon-pencil"></i>
        Edit this device
      </a>
      <p><strong>Pin #:</strong> <%= pin %></p>
    </script>

    <script type="text/template" id="loading-view">
      <h1><%= title %></h1>
      <p><%= message %></p>
      <div id="spinner"></div>
    </script>

    <script type="text/template" id="overview-main">
    <img src="/img/background.jpg" style="
        position: absolute;
        margin: fixed;
        width: 2000px;
        left: 50%;    
        margin-left: -1000px;
        top: -350px;
        -webkit-filter: blur(3px);
    ">
    <div class="center-block" style="width:1100px;position:relative;">
    <embed src="/svg/greenhouse.svg" type="image/svg+xml" class="center-block greenhouse" style="width:1040px;" />
      <div class="window inside">
        <h2>Inside</h2>
        <div data-toggle="tooltip" title="Inside Temperature" class="has-tooltip box sensor"><img src="/img/temperature_w.png" class="icon"/><div class="info">80F</div></div>
        <div data-toggle="tooltip" title="Inside Humidity" class="has-tooltip box sensor"><img src="/img/water_w.png" class="icon"/><div class="info">30%</div></div>
        <div data-toggle="tooltip" title="Inside Light" class="has-tooltip box device off"><img src="/img/sun_w.png" class="icon"/><div class="info">Off</div></div>
        <div data-toggle="tooltip" title="Inside Pump" class="has-tooltip box device off"><img src="/img/water_w.png" class="icon"/><div class="info">Off</div></div>
        <div data-toggle="tooltip" title="Inside Fan" class="has-tooltip box device on"><img src="/img/fan_w.png" class="icon"/><div class="info">On</div></div>
        <div data-toggle="tooltip" title="Inside Heater" class="has-tooltip box device off"><img src="/img/hot_w.png" class="icon"/><div class="info">Off</div></div>
      </div>
      <div class="window outside">
        <h2>Outside</h2>
        <div data-toggle="tooltip" title="Outside Temperature" class="has-tooltip box sensor"><img src="/img/temperature_w.png" class="icon"/><div class="info">70F</div></div>
      </div>
      <div class="window underground">
        <h2>Ground</h2>
        <div data-toggle="tooltip" title="Ground Temperature" class="has-tooltip box sensor"><img src="/img/temperature_w.png" class="icon"/><div class="info">67F</div></div>
        <div data-toggle="tooltip" title="Ground Fan" class="has-tooltip box device off"><img src="/img/fan_w.png" class="icon"/><div class="info">Off</div></div>
      </div>
    </div>
    </script>

    <script type="text/template" id="device-form">
      <form>
        <div class="control-group">
          <label for="device-name" class="control-label">Name:</label>
          <input id="device-name" name="name" type="text" value="<%= name %>"/>
        </div>
        <div class="control-group">
          <label for="device-type" class="control-label">Type:</label>
          <input id="device-type" name="type" type="text" value="<%= type %>"/>
        </div>
        <div class="control-group">
          <label for="device-pin" class="control-label">Pin #:</label>
          <input id="device-pin" name="pin" type="text" value="<%= pin %>"/>
        </div>
        <button class="btn js-submit">Save</button>
      </form>
    </script>

    <script type="text/template" id="device-list-layout">
      <div id="panel-region"></div>
      <div id="devices-region"></div>
    </script>

    <script type="text/template" id="device-list-panel">
      <button class="btn btn-primary js-new">New device</button>
      <form id="filter-form" class="form-search form-inline pull-right">
        <div class="input-append">
          <input type="text" class="span2 search-query js-filter-criterion">
          <button type="submit" class="btn">Filter devices</button>
        </div>
      </form>
    </script>

    <script type="text/template" id="about-message">
      <h1>About this application</h1>
      <p>This application was designed to accompany you during your learning.</p>
      <p>Hopefully, it has served you well !</p>
    </script>

    <script src="/js/vendor/jquery.js"></script>
    <script src="/js/vendor/jquery-ui-1.10.3.js"></script>
    <script src="/js/vendor/json2.js"></script>
    <script src="/js/vendor/underscore.js"></script>
    <script src="/js/vendor/backbone.js"></script>
    <script src="/js/vendor/backbone.picky.js"></script>
    <script src="/js/vendor/backbone.syphon.js"></script>
    <script src="/js/vendor/backbone.localstorage.js"></script>
    <script src="/js/vendor/backbone.marionette.js"></script>
    <script src="/js/vendor/spin.js"></script>
    <script src="/js/vendor/spin.jquery.js"></script>
    <script src="/js/vendor/bootstrap.min.js"></script>

    <script src="/js/apps/config/marionette/regions/dialog.js"></script>
    <script src="/js/app.js"></script>
    <script src="/js/apps/config/storage/localstorage.js"></script>
    <script src="/js/entities/common.js"></script>
    <script src="/js/entities/header.js"></script>
    <script src="/js/entities/device.js"></script>
    <script src="/js/common/views.js"></script>

    <script src="/js/apps/devices/devices_app.js"></script>
    <script src="/js/apps/devices/common/views.js"></script>
    <script src="/js/apps/devices/list/list_view.js"></script>
    <script src="/js/apps/devices/list/list_controller.js"></script>
    <script src="/js/apps/devices/show/show_view.js"></script>
    <script src="/js/apps/devices/show/show_controller.js"></script>
    <script src="/js/apps/devices/edit/edit_view.js"></script>
    <script src="/js/apps/devices/edit/edit_controller.js"></script>
    <script src="/js/apps/devices/new/new_view.js"></script>

    <script src="/js/apps/about/about_app.js"></script>
    <script src="/js/apps/about/show/show_view.js"></script>
    <script src="/js/apps/about/show/show_controller.js"></script>

    <script src="/js/apps/overview/overview_app.js"></script>
    <script src="/js/apps/overview/show/show_view.js"></script>
    <script src="/js/apps/overview/show/show_controller.js"></script>

    <script src="/js/apps/header/header_app.js"></script>
    <script src="/js/apps/header/list/list_view.js"></script>
    <script src="/js/apps/header/list/list_controller.js"></script>

    <script type="text/javascript">
      App.start();

      $(function(){
        resize();
      })

      $(window).resize(resize);

      function resize(){
        var h = $(window).height();
        console.log(h)
        $('#main-region').height(h);
      }
    </script>

@stop