<?php
require "Guidance.php";
class Restaurant extends Guidance
{
    public $Type = array("Cafe", "Fastfood", "Cuisine", "SitDown");

    private $type; //ArrayList<Type>
    private $menu; //Menu
    private $numberOfSeats;

    public function __construct()
    {
        parent::__construct();
        $this->type = array();
        $this->menu = new Menu();
        $this->numberOfSeats = 0;
    }

    public function toString()
    {
        return parent::toString() . $this->typeToString() . "◎" . $this->menuToString() . "◎" . $this->numberOfSeats;
    }

    public function getNumberOfSeats()
    {
        return $this->numberOfSeats;
    }

    public function setNumberOfSeats($numberOfSeats)
    {
        $this->numberOfSeats = $numberOfSeats;
    }

    public function getType()
    {
        return $this->type;
    }

    public function setType($type)
    {
        $this->type = $type;
    }

    public function getMenu()
    {
        return $this->menu;
    }

    public function setMenu(Menu $menu)
    {
        $this->menu = $menu;
    }

    public function menuToString()
    {
        return $this->menu->toString();
    }

    public function setMenuByString($string)
    {
        $this->menu->setMenu($string);
    }

    public function typeToString()
    {
        if (empty($this->type))
            return "";

        $string = "";

        foreach ($this->type as $type)
            $string .= $type . "/";

        return substr($string, 0, count($string) - 1);
    }

    public function setTypeByString($string)
    {
        $index = 0;
        for ($i = 0; $i < count($string); $i++)
            if ($string[$i] == '/' || $i == count($string) - 1) {
                $last = $i == count($string) - 1 ? $i + 1 : $i;
                array_push($type, substr($string, $index, $last));
                $index = $i + 1;
            }
    }
}