//Sobhagya more coins --> win
// else Nitin win (even in case of same coins)

//a --> initial coins of Nitin
//b --> initial coins of Sobhagya

//c --> coins given by Ritik who is not winning
//d --> coins given by Satyarth who is not winning

#include <stdio.h>
int main(void)
{
	int t;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    int a,b,c,d;
	    scanf("%d %d %d %d",&a,&b,&c,&d);
	    if(b>a)      //Sobhagya has more coins
	    {
	        a=a+c;   //coins given to Nitin
	        if(b>a)  //Sobhagya has more coins
	        {
	            a=a+d; //coins given to Nitin
	        }
	        else
	        {
	            b=b+d; //coins given to Sobhagya
	        }
	    }
	    else          //Nitin has more coins
	    {
	        b=b+c;    //coins given to Sobhagya
	        if(b>a)   //Sobhagya has more coins
	        {
	            a=a+d; //coins given to Nitin
	        }
	        else
	        {
	            b=b+d; //coins given to Sobhagya
	        }
	    }
	    if(b>a)
	    {
	        printf("S\n");
	    }
	    else
	    {
	        printf("N\n");
	    }
	}
	return 0;
}