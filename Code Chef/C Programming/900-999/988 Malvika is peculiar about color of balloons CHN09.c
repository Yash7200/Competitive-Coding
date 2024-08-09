//Malvika likes 2 colors: Amber, Brass
//Malvika wants all balloons in same colors

//If different balloons found:
//in anger she paints balloons to opposite color
//find minimum balloons needed to be colored

//n --> balloons bought by mom

//s --> string consist of 'a' or 'b'
//if 'a': balloon is Amber colored
//if 'b': balloon is Brass colored

//ca --> count of balloon with Amber color
//cb --> count of balloon with Brass color

//min --> minimum balloons to be colored
#include <stdio.h>
#include <string.h>
#include <math.h>
int main(void)
{
	// your code goes here
	int t;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    char s[100];
	    scanf("%s",s);
	    int n=strlen(s),ca=0,cb=0;
	    for(int j=0;j<n;j++)
	    {
	        if(s[j]=='a')
	        {
	            ca++;
	        }
	        else
	        {
	            cb++;
	        }
	    }
	    int min=fmin(ca,cb);
	    printf("%d\n",min);
	}
	return 0;
}