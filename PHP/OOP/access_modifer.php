<?php
class techers
{
    private function questionpapers()
    {
        return "important";
    }
    public function exam()
    {
        if ($this->questionpapers() == "important") {
            echo "do somethig";
        } else {
            echo "not important";
        }
    }
    protected function studentMarks()
    {
        echo "all student are good";
    }
}

class management extends techers
{
    function reviewExam()
    {
        $this->studentMarks();
    }

}

$t1 = new techers();

$m1 = new management();

echo $m1->reviewExam();