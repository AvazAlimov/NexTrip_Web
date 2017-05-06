<?php

class Comment
{
    private $comment;
    private $writtenDate;
    private $guest;

    public function __construct($string)
    {
        $index = strpos($string, '□');
        $this->setComment(substr($string, 0, $index));
        $index2 = strpos(substr($string, $index + 1, count($string)), '□');
        $this->setWrittenDate(substr($string, $index + 1, $index2));
        $guest = "guess";
    }

    public function setComment($comment)
    {
        $this->comment = $comment;
    }

    public function setGuest($guest)
    {
        $this->guest = $guest;
    }

    public function setWrittenDate($writtenDate)
    {
        $this->writtenDate = $writtenDate;
    }

    public function getWrittenDate()
    {
        return $this->writtenDate;
    }

    public function getGuest()
    {
        return $this->guest;
    }

    public function getComment()
    {
        return $this->comment;
    }

    public function toString()
    {
        return $this->comment . "□" . $this->writtenDate . "□" . $this->guest;
    }
}