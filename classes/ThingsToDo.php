<?php
require "Guidance.php";
class ThingsToDo extends Guidance
{
    private $startDate;
    private $endDate;
    private $price;
    private $rules;

    public function __construct()
    {
        parent::__construct();
    }

    public function toString()
    {
        return parent::toString() . $this->startDate . "◎" . $this->endDate . "◎" . $this->price . "◎" . $this->rules;
    }

    public function setPrice($price)
    {
        $this->price = $price;
    }

    public function setEndDate($endDate)
    {
        $this->endDate = $endDate;
    }

    public function setStartDate($startDate)
    {
        $this->startDate = $startDate;
    }

    public function getPrice()
    {
        return $this->price;
    }

    public function getStartDate()
    {
        return $this->startDate;
    }

    public function getEndDate()
    {
        return $this->endDate;
    }

    public function getRules()
    {
        return $this->rules;
    }

    public function setRules($rules)
    {
        $this->rules = $rules;
    }
}