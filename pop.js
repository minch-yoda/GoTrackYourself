function get_task_object(){
	var task = {};
	task.name = $('#task_name').val();
	task.tags = $('#task_tags').val();
	task.id = $('#task_id').val();
	return task;
}
function change_task_display(txt){
	$('#task_display').val(txt);
}

function change_task_details(task){
	//adding descriptions from the last task just in case i need em
	$('#task_name').val(task.name);
	$('#task_tags').val(task.tags);
	$('#task_id').val(task.id);
}

window.onload = function(){
	message('init_task_details');
	$('body').on('input','#task_name,#task_tags',function(event){
		message('task_change',get_task_object());
	});
	
	$('body').on('click','#task_start',function(event){
		message('task_play',get_task_object());
	});
	$('body').on('click','#task_list_open',function(event){
		chrome.runtime.openOptionsPage();	//won't load spreadsheet
		//var opt = window.open("opt.htm","GoTrackYourselfOptions");
		//a hack to force it to load the spreadsheet
		//no idea why it doesn't the first time you open the page
		//opt.addEventListener('load', function(){
		//	alert(0);
		//}, false);
	});

	$('body').on('click','#task_stop',function(event){
		message('task_stop',get_task_object());
	});
	$('body').on('click','#task_pause',function(event){
		message('task_pause',get_task_object());
	});
}