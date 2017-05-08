<?php

class Contact
{
    public $Type = array("Facebook", "Site", "PhoneNumber", "Mail", "Telegram", "Other");
    private $type;
    private $source;

    public function __construct($source, $type)
    {
        $this->source = $source;
        $this->type = $type;
    }

    public function withString($string)
    {
        $this->setType(substr($string, 0, strpos($string, '□')));
        $this->setSource(substr($string, strpos($string, '□'), count($string)));
    }

    public function setSource($source)
    {
        $this->source = $source;
    }

    public function setType($type)
    {
        $this->type = $type;
    }

    public function getSource()
    {
        return $this->source;
    }

    public function getType()
    {
        return $this->type;
    }

    public function toString()
    {
        return $this->type . "□" . $this->source;
    }
}