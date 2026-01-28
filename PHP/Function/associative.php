<?php
// $users = [
//     [1, "dishant", "sangani", "nikol"],
//     [2, "dev", "patel", "surat"],
//     [3, "names", "hello", "ctm"],
// ];


// for ($i = 0; $i < count($users); $i++) {
//     for ($j = 0; $j < count($users[$i]); $j++) {
//         echo $users[$i][$j];
//         echo "<br>";
//     }
// }

$users = [
    [
        "name" => "dishant",
        "age" => 23,
        "city" => "nikol"
    ],
    [
        "name" => "dev",
        "age" => 27,
        "city" => "ahmedabad"
    ],
    [
        "name" => "hhell",
        "age" => 67,
        "city" => "ano"
    ],
];


foreach ($users as $users) {
    foreach ($users as $item) {
        echo $item;
        echo "<br>";
    }
}
