<?php
#database connection
class DbConnect {
private $server = 'localhost:3307';
private $dbname = 'music_library';
private $user = 'root';
private $password = '';

public function connect() {
try {
$connection = new PDO('mysql:host=' .$this->server .';dbname=' .$this->dbname, $this->user, $this->password);
$connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
return $connection;
} catch(\Exception $e) {
echo "Database Error: " . $e->getMessage();
}
}
}
?>