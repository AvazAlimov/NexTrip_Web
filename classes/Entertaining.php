<?php

class Entertaining extends Guidance
{
    private $price;
    private $rules;
    private $ageLimit;

    public function __construct()
    {
        parent::__construct();
        $this->price = 0.0;
        $this->rules = "";
        $this->ageLimit = 0;
    }

    public function toString()
    {
        return parent::toString() . $this->price . "◎" . $this->rules . "◎" . $this->ageLimit;
    }

    public function getPrice()
    {
        return $this->price;
    }

    public function setPrice($price)
    {
        $this->price = $price;
    }

    public function getRules()
    {
        return $this->rules;
    }

    public function setRules($rules)
    {
        $this->rules = $rules;
    }

    public function getAgeLimit()
    {
        return $this->ageLimit;
    }

    public function setAgeLimit($ageLimit)
    {
        $this->ageLimit = $ageLimit;
    }
}