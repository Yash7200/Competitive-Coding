//3 problems in contest worth a,b,c points
//only first solver gets points of same problem

//both can't solve the same problem at same time.
//chef wants to check chance of draw

//there can be chances of draw:
    //if any question's points are equal to total points of another 2

#include <stdio.h>
int main(void)
{
	int t;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    int a,b,c;
	    scanf("%d %d %d",&a,&b,&c);
	    if(a==b+c||b==a+c||c==a+b)
	    {
	        printf("YES\n");
	    }
	    else
	    {
	        printf("NO\n");
	    }
	}
	return 0;
}