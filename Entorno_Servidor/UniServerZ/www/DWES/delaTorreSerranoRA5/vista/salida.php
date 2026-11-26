<?php

if (!empty($_GET['r']))
    {
        echo htmlspecialchars($_GET['u']). ', el resultado es... <br>';
        echo $_GET['r'] . ' y mi jugada fue: ' . $_GET['j'];
    }

?>