//Problem Simplification:
    //l --> length of straight race track
    //v1 --> speed of Tortoise meters per second
    //v2 --> speed of Hare meters per second
    //It is confirm that v1
    //Determine wait time for hare
    //Hare must win. To win there must be difference of at least 1 second

//Logic:
    //If required time to cover the length is in fraction then round of it to +1
    //To do so we'll check if given length can be covered without fraction value by finding modulo & comparing to 0, if not then division with length then increase by 1 (for both Tortoise & Hare)
    
    //If both are having same time then print '-1'.
    
    //If difference between their time is 1 then print '0' because if Hare will wait then he'll loose race.
    //If difference between their time is more than 1 then subtract Hare's time from Tortoise's time & also subtract 1 in order to make Hare win by putting difference of 1 second.
    //Print calculation for 3rd case.
#include <stdio.h>
int main(void)
{
	int t;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    int l,v1,v2;
	    scanf("%d %d %d",&l,&v1,&v2);
	    if((l%v1)==0)
	    {
	        v1=l/v1;
	    }
	    else
	    {
	        v1=(l/v1)+1;
	    }
	    if((l%v2)==0)
	    {
	        v2=l/v2;
	    }
	    else
	    {
	        v2=(l/v2)+1;
	    }
	    if(v1==v2)
	    {
	        printf("-1\n");
	    }
	    else if((v1-v2)==1)
	    {
	        printf("0\n");
	    }
	    else
	    {
	        printf("%d\n",(v1-v2-1));
	    }
	}
	return 0;
}