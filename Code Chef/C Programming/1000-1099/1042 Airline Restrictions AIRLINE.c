//Variable Usage:
    //a,b,c --> weights of 3 bags respectively
    //d --> total weight limit of checked-in bags
    //e --> weight limit of carrying bag

//Logic:
    //Chef wants to carry 3 bags
    //Chef will give 2 bags for checked-in according to weight limit
    //Combination of 2 bags can be any
    //remaining bag again have a weight limit
    //For checking combination we'll pass all combinations of 2 bags with AND condition for remaining bag
    //All 3 combination should firm condition with OR statements

#include <stdio.h>
int main(void)
{
	int t;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    int a,b,c,d,e;
	    scanf("%d %d %d %d %d",&a,&b,&c,&d,&e);
	    if( ((a+b<=d)&&(c<=e)) || ((a+c<=d)&&(b<=e)) ||((c+b<=d)&&(a<=e)))
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