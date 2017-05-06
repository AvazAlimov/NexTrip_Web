<?php

class Hotel extends Guidance
{
    private $startingPrice;
    private $endingPrice;

    public function __construct()
    {
        parent::__construct();
    }

    public function getStartingPrice()
    {
        return $this->startingPrice;
    }

    public function setStartingPrice($startingPrice)
    {
        $this->startingPrice = $startingPrice;
    }

    public function getEndingPrice()
    {
        return $this->endingPrice;
    }

    public function setEndingPrice($endingPrice)
    {
        $this->endingPrice = $endingPrice;
    }

    public function toString()
    {
        return parent::toString() . $this->startingPrice . "◎" . $this->endingPrice;
    }
}