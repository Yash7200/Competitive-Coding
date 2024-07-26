//n --> no. of races
//a --> time taken by Alice to finish race
//b --> time taken by Bob to finish race

//person with less sum of time wins.
//if same time then draw

//x --> index selected by Alice & race time is ignored
//y --> index selected by Bob & race time is ignored

//'x' can be different from 'y'
//in test cases x & y are maximum time taken by Alice and Bob

//amax --> maximum time taken by Alice
//bmax --> maximum time taken by Bob

//timea --> total time taken by Alice
//timeb --> total time taken by Bob

//we will subtract maximum time at end of all input
#include <stdio.h>
int main(void)
{
	int t;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    int n,amax=0,bmax=0,timea=0,timeb=0;
	    scanf("%d",&n);
	    int a[n],b[n];
	    for(int j=0;j<n;j++)
	    {
	        scanf("%d",&a[j]);
	        timea=timea+a[j];
	        if(a[j]>amax)
	        {
	            amax=a[j];
	        }
	    }
	    timea=timea-amax;
	    for(int j=0;j<n;j++)
	    {
	        scanf("%d",&b[j]);
	        timeb=timeb+b[j];
	        if(b[j]>bmax)
	        {
	            bmax=b[j];
	        }
	    }
	    timeb=timeb-bmax;
	    if(timea==timeb)
	    {
	        printf("Draw\n");
	    }
	    else if(timea<timeb)
	    {
	        printf("Alice\n");
	    }
	    else 
	    {
	        printf("Bob\n");
	    }
	}
	return 0;
}