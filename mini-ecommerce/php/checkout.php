<?php

$order = $_POST["order"];

$file = fopen("../data/orders.txt","a");

fwrite($file,$order."\n");

fclose($file);

echo "<h1>Pedido recebido!</h1>";

?>