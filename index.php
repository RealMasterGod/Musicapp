<?php
error_reporting(E_ALL);
ini_set('display_errors',1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
#echo "Testing Testing things just got more interesting";
include 'DbConnect.php';
$db = new DbConnect;
$connection = $db->connect();
#var_dump($connection);

$method = $_SERVER['REQUEST_METHOD'];
switch($method) {
    case "GET":
        //echo $_SERVER['REQUEST_URI'];
        $path = explode('/', $_SERVER['REQUEST_URI']);
		$size = count($path);
        //echo count($path);
        //$sql = "SELECT * FROM label";
        // if() {
            
        // }
        // else if(isset($path[3] )&&($path[3] == "album") ) {
            
        // }
        if(isset($path[3]) && count($path) > 4) {
            //echo "inside artist";
            if($path[3] == "artist")
            {
					$arr = explode(':',$path[4]);
                    $sql = "SELECT `ArtistID`,`Aname`,`Years_active`,`Bdate`,`Birth_place` FROM artist,label";
                    $sql .= " WHERE LabelID = Lid AND Lname LIKE '{$arr[1]}%'";
            }
            else if($path[3] == "album")
            {
				
				$sql = "SELECT AlbumID,Title,Release_date,Rating,Copies_sold,Aname,Lname FROM album,artist,label";
				$sql .= " WHERE Labid = LabelID AND Aid = ArtistID";
				for($i = 4;$i<$size;$i++)
				{
					$arr = explode(':',$path[$i]);
					if($arr[0] == "lab")
						$sql .= " AND Lname LIKE '%{$arr[1]}%'";
					else if($arr[0] == "art")
						$sql .= " AND Aname LIKE '%{$arr[1]}%'";
					else if($arr[0] == "rel")
						$sql .= " AND Release_date LIKE '%{$arr[1]}%'";
					else if($arr[0] == "rat")
						$sql .= " AND Rating LIKE '{$arr[1]}%'";
				}
                //echo "in album";
                /*if($path[4] == "lab")
                {
                    //echo "alblab\n";
                    //echo count($path);
                    //echo $path[5];
                    //echo  $_SERVER['REQUEST_URI'];
                    //echo "\n";
                   
                   
                }
                else if($path[4] == "art")
                {
                    $sql = "SELECT AlbumID,Title,Release_date,Rating,Copies_sold,Aname,Lname FROM album,artist,label";
                    $sql .= " WHERE Labid = LabelID AND Aid = ArtistID AND Aname LIKE '{$path[5]}%'";
                }
                else if($path[4] == "rel")
                {
                    $sql = "SELECT AlbumID,Title,Release_date,Rating,Copies_sold,Aname,Lname FROM album,artist,label";
                    $sql .= " WHERE Labid = LabelID AND Aid = ArtistID AND Release_date LIKE '{$path[5]}%'";
                }
                else if($path[4] == "rat")
                {
                    $sql = "SELECT AlbumID,Title,Release_date,Rating,Copies_sold,Aname,Lname FROM album,artist,label";
                    $sql .= " WHERE Labid = LabelID AND Aid = ArtistID AND Rating LIKE '{$path[5]}%'";
                }*/
            }
            else if($path[3] == "song")
            {
				$sql = "SELECT `SongID`, `Sname`, S.`Release_date`, `Genre`, `Lyricist`, `Views_on_yt`, `Duration`, `Title`,`Aname` FROM song S,album A,artist";
                $sql .= " WHERE Albid = AlbumID AND Aid = ArtistID";
                //echo $path[4]
                //echo  $_SERVER['REQUEST_URI'];
				for($i = 4;$i<$size;$i++)
				{
					$arr = explode(':',$path[$i]);
					if($arr[0] == "alb")
						$sql .= " AND Title LIKE '%{$arr[1]}%'";
					else if($arr[0] == "rel")
						$sql .= " AND S.Release_date LIKE '%{$arr[1]}%'";
					else if($arr[0] == "art")
						$sql .= " AND Aname LIKE '%{$arr[1]}%'";
					else if($arr[0] == "dur")
						$sql .= " AND Duration LIKE '{$arr[1]}%'";
				}
                /*if($path[4] == "rel")
                {
                    //echo "rel";
                    $sql = "SELECT `SongID`, `Sname`, S.`Release_date`, `Genre`, `Lyricist`, `Views_on_yt`, `Duration`, `Title`,`Aname` FROM song S,album A,artist";
                    $sql .= " WHERE Albid = AlbumID AND Aid = ArtistID AND S.Release_date LIKE '%{$path[5]}%'";
                }
                else if($path[4] == "alb")
                {
                    //echo "alb";
                    $sql = "SELECT `SongID`, `Sname`, S.`Release_date`, `Genre`, `Lyricist`, `Views_on_yt`, `Duration`, `Title`,`Aname` FROM song S,album A,artist";
                    $sql .= " WHERE Albid = AlbumID AND Aid = ArtistID AND Title LIKE '%{$path[5]}%'";
                }
                else if($path[4] == "art")
                {
                   // echo "art";
                    $sql = "SELECT `SongID`, `Sname`, S.`Release_date`, `Genre`, `Lyricist`, `Views_on_yt`, `Duration`, `Title`,`Aname` FROM song S,album A,artist";
                    $sql .= " WHERE Albid = AlbumID AND Aid = ArtistID AND Aname LIKE '%{$path[5]}%'";
                }
                else if($path[4] == "dur")
                {
                    //echo "dur";
                    $sql = "SELECT `SongID`, `Sname`, S.`Release_date`, `Genre`, `Lyricist`, `Views_on_yt`, `Duration`, `Title`,`Aname` FROM song S,album A,artist";
                    $sql .= " WHERE Albid = AlbumID AND Aid = ArtistID AND Duration LIKE '%{$path[5]}%'";
                }*/
                
            }
            else if($path[3] == "concert")
            {
				$sql = "SELECT A.`Aname`,C.`Venue`,C.`Date` FROM concert C,artist A";
                $sql .= " WHERE A.ArtistID = C.ArtistID";
				for($i = 4;$i<$size;$i++)
				{
					$arr = explode(':',$path[$i]);
					if($arr[0] == "ven")
						$sql .= " AND C.Venue LIKE '%{$arr[1]}%'";
					else if($arr[0] == "rel")
						$sql .= " AND C.Date LIKE '%{$arr[1]}%'";
					else if($arr[0] == "art")
						$sql .= " AND A.Aname LIKE '%{$arr[1]}%'";
				}
                /*if($path[4] == "art")
                {
                    $sql = "SELECT A.`Aname`,C.`Venue`,C.`Date` FROM concert C,artist A";
                    $sql .= " WHERE A.ArtistID = C.ArtistID AND A.Aname LIKE '%{$path[5]}%'";
                }
                else if($path[4] == "rel")
                {
                    //echo "rel";
                    $sql = "SELECT A.`Aname`,C.`Venue`,C.`Date` FROM concert C,artist A";
                    $sql .= " WHERE A.ArtistID = C.ArtistID AND C.Date LIKE '%{$path[5]}%'";
                }
                else if($path[4] == "ven")
                {
                    $sql = "SELECT A.`Aname`,C.`Venue`,C.`Date` FROM concert C,artist A";
                    $sql .= " WHERE A.ArtistID = C.ArtistID AND C.Venue LIKE '%{$path[5]}%'";
                }*/
            }
            else if($path[3] == "remix")
            {
				$sql = "SELECT S.`Sname`,`Artist_name`,R.`Release_date`,`Original_artist` FROM song S,remix R";
                $sql .= " WHERE S.SongID = R.Sid";
				for($i = 4;$i<$size;$i++)
				{
					$arr = explode(':',$path[$i]);
					if($arr[0] == "oart")
						$sql .= " AND R.Original_artist LIKE '%{$arr[1]}%'";
					else if($arr[0] == "rel")
						$sql .= " AND R.Release_date LIKE '%{$arr[1]}%'";
					else if($arr[0] == "art")
						$sql .= " AND R.Artist_name LIKE '%{$arr[1]}%'";
				}
                /*if($path[4] == "art")
                {
                    $sql = "SELECT S.`Sname`,`Artist_name`,R.`Release_date`,`Original_artist` FROM song S,remix R";
                    $sql .= " WHERE S.SongID = R.Sid AND R.Artist_name LIKE '%{$path[5]}%'";
                }
                else if($path[4] == "rel")
                {
                    //echo "rel";
                    $sql = "SELECT S.`Sname`,`Artist_name`,R.`Release_date`,`Original_artist` FROM song S,remix R";
                    $sql .= " WHERE S.SongID = R.Sid AND R.Release_date LIKE '%{$path[5]}%'";
                }
                else if($path[4] == "oart")
                {
                    $sql = "SELECT S.`Sname`,`Artist_name`,R.`Release_date`,`Original_artist` FROM song S,remix R";
                    $sql .= " WHERE S.SongID = R.Sid AND R.Original_artist LIKE '%{$path[5]}%'";
                }*/
            }
        }
        else if(isset($path[3]) && count($path) <= 4) {
            if(isset($path[3] )&&($path[3] == "label") )
            {
                $sql = "SELECT * FROM label";
            }
            else if(isset($path[3] )&&($path[3] == "artist"))
            {
                $sql = "SELECT `ArtistID`,`Aname`,`Years_active`,`Bdate`,`Birth_place`,`Lname` FROM artist,label WHERE LabelID = Lid";
            }
            else if(isset($path[3] )&&($path[3] == "album"))
            {
                //echo "inside album";
                $sql = "SELECT AlbumID,Title,Release_date,Rating,Copies_sold,Aname,Lname FROM album,artist,label";
                $sql .= " WHERE Labid = LabelID AND Aid = ArtistID";
            }
            else if(isset($path[3] )&&($path[3] == "song") )
            {
                $sql = "SELECT `SongID`, `Sname`, S.`Release_date`, `Genre`, `Lyricist`, `Views_on_yt`, `Duration`, `Title`,`Aname` FROM song S,album A,artist";
                $sql .= " WHERE Albid = AlbumID AND Aid = ArtistID";
            }
            else if(isset($path[3] )&&($path[3] == "concert"))
            {
                $sql = "SELECT A.`Aname`,C.`Venue`,C.`Date` FROM concert C,artist A";
                $sql .= " WHERE A.ArtistID = C.ArtistID";
            }
            else if(isset($path[3] )&&($path[3] == "remix"))
            {
                $sql = "SELECT  S.`Sname`, `Artist_name`, R.`Release_date`, `Original_artist` FROM remix R,song S";
                $sql .= " WHERE S.SongID = R.Sid";
            }
        }
        $stmt = $connection->prepare($sql);
        $stmt->execute();
        $label = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($label);
        break;
    case "POST":
		$inpath = explode('/', $_SERVER['REQUEST_URI']);
        if(isset($inpath[3]) && ($inpath[3] == "label"))
		{
			$lname = json_decode( file_get_contents('php://input') );
			$sql = "INSERT INTO label (LabelID,Lname) VALUES (null, :Lname)";
			$stmt = $connection->prepare($sql);
			$stmt->bindParam(':Lname', $lname->Lname);
			if($stmt->execute()) {
				$response = ['status' => 1, 'message' => 'Insert Successful'];
			} else {
				$response = ['status' => 0, 'message' => 'Insert Unsuccessful'];
			}
		}
		else if(isset($inpath[3]) && ($inpath[3] == "artist"))
		{
			$lname = json_decode( file_get_contents('php://input') );
			$sql = "INSERT INTO artist (ArtistID,Aname,Years_active,Bdate,Birth_place,Lid) VALUES (null, :Aname, :year, :bdate, :bplace, :Lid)";
			$stmt = $connection->prepare($sql);
			$stmt->bindParam(':Aname', $lname->Aname);
			$stmt->bindParam(':year', $lname->Yactive);
			$stmt->bindParam(':bdate', $lname->Bdate);
			$stmt->bindParam(':bplace', $lname->Bplace);
			$stmt->bindParam(':Lname', $lname->Lid);
			if($stmt->execute()) {
				$response = ['status' => 1, 'message' => 'Insert Successful'];
			} else {
				$response = ['status' => 0, 'message' => 'Insert Unsuccessful'];
			}
		}
		else if(isset($inpath[3]) && ($inpath[3] == "album"))
		{
			$lname = json_decode( file_get_contents('php://input') );
			$sql = "INSERT INTO album (AlbumID,Title,Release_date,Rating,Copies_sold,Aid,Labid) VALUES (null, :Atitle, :rdate, :rating, :sold, :Aid, :Lid)";
			$stmt = $connection->prepare($sql);
			$stmt->bindParam(':Atitle', $lname->Atitle);
			$stmt->bindParam(':rdate', $lname->Rdate);
			$stmt->bindParam(':rating', $lname->Rating);
			$stmt->bindParam(':sold', $lname->Csold);
			$stmt->bindParam(':Aid', $lname->Aid);
			$stmt->bindParam(':Lid', $lname->Lid);
			if($stmt->execute()) {
				$response = ['status' => 1, 'message' => 'Insert Successful'];
			} else {
				$response = ['status' => 0, 'message' => 'Insert Unsuccessful'];
			}
		}
		else if(isset($inpath[3]) && ($inpath[3] == "song"))
		{
			$lname = json_decode( file_get_contents('php://input') );
			$sql = "INSERT INTO song (SongID,Sname,Release_date,Genre,Lyricist,Views_on_yt,Duration,Albid) VALUES (null, :Sname, :rdate, :genre, :writer, :voy, :duration, :albid)";
			$stmt = $connection->prepare($sql);
			$stmt->bindParam(':Sname', $lname->Sname);
			$stmt->bindParam(':rdate', $lname->Rdate);
			$stmt->bindParam(':genre', $lname->Genre);
			$stmt->bindParam(':writer', $lname->Swriter);
			$stmt->bindParam(':voy', $lname->Voy);
			$stmt->bindParam(':duration', $lname->Duration);
			$stmt->bindParam(':albid', $lname->Albid);
			if($stmt->execute()) {
				$response = ['status' => 1, 'message' => 'Insert Successful'];
			} else {
				$response = ['status' => 0, 'message' => 'Insert Unsuccessful'];
			}
		}
		else if(isset($inpath[3]) && ($inpath[3] == "remix"))
		{
			$lname = json_decode( file_get_contents('php://input') );
			$sql = "INSERT INTO remix (Sid,Artist_name,Release_date,Original_artist) VALUES (:Sid, :Aname, :rdate, :Oname)";
			$stmt = $connection->prepare($sql);
			$stmt->bindParam(':Sid', $lname->Sid);
			$stmt->bindParam(':Aname', $lname->Aname);
			$stmt->bindParam(':rdate', $lname->Rdate);
			$stmt->bindParam(':Oname', $lname->Oname);
			if($stmt->execute()) {
				$response = ['status' => 1, 'message' => 'Insert Successful'];
			} else {
				$response = ['status' => 0, 'message' => 'Insert Unsuccessful'];
			}
		}
		else if(isset($inpath[3]) && ($inpath[3] == "concert"))
		{
			$lname = json_decode( file_get_contents('php://input') );
			$sql = "INSERT INTO concert (ArtistID,Venue,Date) VALUES (:Aid, :venue, :date)";
			$stmt = $connection->prepare($sql);
			$stmt->bindParam(':Aid', $lname->Aid);
			$stmt->bindParam(':venue', $lname->venue);
			$stmt->bindParam(':rdate', $lname->date);
			if($stmt->execute()) {
				$response = ['status' => 1, 'message' => 'Insert Successful'];
			} else {
				$response = ['status' => 0, 'message' => 'Insert Unsuccessful'];
			}
		}
	}
?>