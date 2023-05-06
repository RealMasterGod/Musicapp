-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3307
-- Generation Time: Mar 30, 2023 at 10:35 AM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `music_library`
--

-- --------------------------------------------------------

--
-- Table structure for table `album`
--

CREATE TABLE `album` (
  `AlbumID` int(10) UNSIGNED NOT NULL,
  `Title` varchar(60) NOT NULL,
  `Release_date` date NOT NULL,
  `Rating` decimal(2,1) NOT NULL,
  `Copies_sold` varchar(50) NOT NULL,
  `Aid` int(10) UNSIGNED NOT NULL,
  `Labid` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `album`
--

INSERT INTO `album` (`AlbumID`, `Title`, `Release_date`, `Rating`, `Copies_sold`, `Aid`, `Labid`) VALUES
(1, 'Thriller', '1982-11-29', '9.9', '70 million', 1, 1),
(2, 'Purpose', '2015-11-13', '8.8', '14m', 2, 2);

-- --------------------------------------------------------

--
-- Table structure for table `artist`
--

CREATE TABLE `artist` (
  `ArtistID` int(11) UNSIGNED NOT NULL,
  `Aname` varchar(60) NOT NULL,
  `Years_active` varchar(45) NOT NULL,
  `Bdate` date NOT NULL,
  `Birth_place` varchar(70) NOT NULL,
  `Lid` int(11) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `artist`
--

INSERT INTO `artist` (`ArtistID`, `Aname`, `Years_active`, `Bdate`, `Birth_place`, `Lid`) VALUES
(1, 'Micheal Jackson', '1964-2009', '1958-08-29', 'Gary, Indiana, United States', 1),
(2, 'Justin Bieber', '2007-present', '1994-03-01', 'Stratford, Ontario, Canada', 2);

-- --------------------------------------------------------

--
-- Table structure for table `band`
--

CREATE TABLE `band` (
  `BandID` int(10) UNSIGNED NOT NULL,
  `Bname` varchar(60) NOT NULL,
  `Activity_status` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `concert`
--

CREATE TABLE `concert` (
  `ArtistID` int(10) UNSIGNED NOT NULL,
  `Venue` varchar(60) NOT NULL,
  `Date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `label`
--

CREATE TABLE `label` (
  `LabelID` int(11) UNSIGNED NOT NULL,
  `Lname` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `label`
--

INSERT INTO `label` (`LabelID`, `Lname`) VALUES
(1, 'Warner Bros'),
(2, 'Universal');

-- --------------------------------------------------------

--
-- Table structure for table `remix`
--

CREATE TABLE `remix` (
  `Sid` int(11) UNSIGNED NOT NULL,
  `Artist_name` varchar(60) NOT NULL,
  `Release_date` date NOT NULL,
  `Original_artist` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `song`
--

CREATE TABLE `song` (
  `SongID` int(10) UNSIGNED NOT NULL,
  `Sname` varchar(70) NOT NULL,
  `Release_date` date NOT NULL,
  `Genre` varchar(100) NOT NULL,
  `Lyricist` varchar(50) NOT NULL,
  `Views_on_yt` varchar(10) NOT NULL,
  `Duration` varchar(10) NOT NULL,
  `Albid` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `song`
--

INSERT INTO `song` (`SongID`, `Sname`, `Release_date`, `Genre`, `Lyricist`, `Views_on_yt`, `Duration`, `Albid`) VALUES
(1, 'Billie Jean', '1983-01-02', 'Funk,R&B,Dance-pop,Post-disco,Disco,Classic Rock', 'Micheal Jackson', '1.3b', '4:54', 1),
(2, 'Thriller', '1983-12-02', 'Disco,Funk,Halloween music', 'Micheal Jackson', '894m', '5:58', 1),
(3, 'Beat It', '1983-02-14', 'Hard rock,Dance-rock,Disco,Dance-pop,Classic rock', 'Micheal Jackson', '921m', '4:18', 1),
(4, 'Where Are U Now', '2015-02-27', 'EDM,Futurepop', 'Justin Bieber', '1.2b', '4:04', 2),
(5, 'Purpose', '2015-03-24', 'Afropop,Pop,Nigerian R&B', 'Justin Bieber', '143m', '3:30', 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `album`
--
ALTER TABLE `album`
  ADD PRIMARY KEY (`AlbumID`),
  ADD KEY `Aid` (`Aid`),
  ADD KEY `Labid` (`Labid`);

--
-- Indexes for table `artist`
--
ALTER TABLE `artist`
  ADD PRIMARY KEY (`ArtistID`),
  ADD KEY `Lid` (`Lid`);

--
-- Indexes for table `band`
--
ALTER TABLE `band`
  ADD PRIMARY KEY (`BandID`);

--
-- Indexes for table `concert`
--
ALTER TABLE `concert`
  ADD PRIMARY KEY (`Date`,`ArtistID`),
  ADD KEY `ArtistID` (`ArtistID`);

--
-- Indexes for table `label`
--
ALTER TABLE `label`
  ADD PRIMARY KEY (`LabelID`);

--
-- Indexes for table `remix`
--
ALTER TABLE `remix`
  ADD PRIMARY KEY (`Sid`,`Artist_name`);

--
-- Indexes for table `song`
--
ALTER TABLE `song`
  ADD PRIMARY KEY (`SongID`),
  ADD KEY `Albid` (`Albid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `album`
--
ALTER TABLE `album`
  MODIFY `AlbumID` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `artist`
--
ALTER TABLE `artist`
  MODIFY `ArtistID` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `band`
--
ALTER TABLE `band`
  MODIFY `BandID` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `label`
--
ALTER TABLE `label`
  MODIFY `LabelID` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `song`
--
ALTER TABLE `song`
  MODIFY `SongID` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `album`
--
ALTER TABLE `album`
  ADD CONSTRAINT `album_ibfk_1` FOREIGN KEY (`Aid`) REFERENCES `artist` (`ArtistID`),
  ADD CONSTRAINT `album_ibfk_2` FOREIGN KEY (`Labid`) REFERENCES `label` (`LabelID`);

--
-- Constraints for table `artist`
--
ALTER TABLE `artist`
  ADD CONSTRAINT `artist_ibfk_1` FOREIGN KEY (`Lid`) REFERENCES `label` (`LabelID`);

--
-- Constraints for table `concert`
--
ALTER TABLE `concert`
  ADD CONSTRAINT `concert_ibfk_1` FOREIGN KEY (`ArtistID`) REFERENCES `artist` (`ArtistID`);

--
-- Constraints for table `remix`
--
ALTER TABLE `remix`
  ADD CONSTRAINT `remix_ibfk_1` FOREIGN KEY (`Sid`) REFERENCES `song` (`SongID`);

--
-- Constraints for table `song`
--
ALTER TABLE `song`
  ADD CONSTRAINT `song_ibfk_1` FOREIGN KEY (`Albid`) REFERENCES `album` (`AlbumID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
