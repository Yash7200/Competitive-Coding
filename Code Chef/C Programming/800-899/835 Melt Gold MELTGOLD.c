//chef has ore melting point--->'X' degrees
//Chef's kiln has initial temprature----->'Y' degrees

//temprature of kiln increases <i> degrees after <i> mins.

//only concerned about temprature at end of each min & not during min.
//ore melts only if kiln's temprature >= ore's melting point.


#include <stdio.h>
int main(void)
{
	int t,X,Y;                      //t-->TestCases, X-->TempratureOfOre, Y-->Kiln'sTemprature 
	scanf("%d",&t);                 //scanning TestCases
	for(int i=0;i<t;i++)
	{
	    scanf("%d %d",&X,&Y);       //scanning X & Y
	    int cnt=0;                  //responsible for counting mins
	    for(int j=1;j<999999;j++)
	    {
	        if(Y<X)
	        {
	            Y=Y+j;
	            cnt=j;
	        }
	        else
	        {
	            break;
	        }
	    }
	    printf("%d\n",cnt);
	}
	return 0;
}
