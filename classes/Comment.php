<?php

class Comment
{
    private $comment;
    private $writtenDate;
    private $username;

    public function __construct($string)
    {
        $index = strpos($string, '□');
        $this->setComment(substr($string, 0, $index));
        $index2 = strpos(substr($string, $index + 1, count($string)), '□');
        $this->setWrittenDate(substr($string, $index + 1, $index2));
        $this->username = "guess";
    }

    public function setComment($comment)
    {
        $this->comment = $comment;
    }

    public function setUsername($username)
    {
        $this->username = $username;
    }

    public function setWrittenDate($writtenDate)
    {
        $this->writtenDate = $writtenDate;
    }

    public function getWrittenDate()
    {
        return $this->writtenDate;
    }

    public function getUsername()
    {
        return $this->username;
    }

    public function getComment()
    {
        return $this->comment;
    }

    public function toString()
    {
        return $this->comment . "□" . $this->writtenDate . "□" . $this->username;
    }
}