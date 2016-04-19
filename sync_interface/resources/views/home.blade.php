@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-12 col-md-offset-0">
            <div class="panel panel-default">
                <div class="panel-heading">Your Files</div>
                <div class="panel-body">
                    <div class="breadcrumb-wrapper">
                        <div class="breadcrumbs">
                            <ul>
                                <li class="crumb-home crumb"><i class="fa fa-home"></i> <span class="label">Home</span></li>
                            </ul>
                        </div>
                    </div>
                    <div class="pane-wrapper">
                        <div class="primary-pane pane">
                            <ul class="listings">
                                <li class="heading">Directories</li>
                            </ul>
                            <ul class="listings directories">
                                @foreach($directories as $key => $directory)
                                    <li class="directory item" data-folder-name="{{ $directory }}"><i class="fa fa-folder-o"></i> {{ $directory }}</li>
                                @endforeach
                            </ul>
                            <ul class="listings">
                                <li class="heading">Files</li>
                            </ul>
                            <ul class="listings files">
                                @foreach($files as $key => $file)
                                    <li class="file item" data-file-name="{{ $file['file'] }}" data-file-type="{{ $file['type'] }}"><i class="fa fa-file-o"></i>{{ $file['file'] }}</li>
                                @endforeach
                            </ul>
                        </div>
                        <div class="view-pane pane">
                            <div class="file-contents">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
