<?php
    
    header("Content-Type: application/json");
    
    $data = json_decode(file_get_contents("php://input"));
    $filename = 'data.json';

    if (file_exists($filename)) {
        $file = file_get_contents('data.json');

    } else {
        $file = fopen("data.json", "a+");
    }

    $taskList = json_decode($file, true);
    $taskList[] = array($data);

    file_put_contents('data.json', json_encode($taskList));

    $file = file_get_contents('data.json');

    unset($file);
    unset($taskList);
?>