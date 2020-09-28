const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground;
var particles=[];
var plinkos=[];
var divisions=[];



function setup() {
  createCanvas(480,800);
  ground=new Ground(240,800,480,20)
}

function draw() {
  background(255,255,255);  
  drawSprites();
}