//n --> no. of houses, array size
//a --> strength of <i>th house

//x --> strngth of bomb

//if x>a then specific house will be destroyed
//if <i>th house is destroyed then all houses before that will get destroyed

//last --> last house to be destroyed

#include <stdio.h>
int main(void) 
{
	int t;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    int n,x,last=0;
	    scanf("%d %d",&n,&x);
	    int h[n];
	    for(int j=0;j<n;j++)
	    {
	        scanf("%d",&h[j]);
	        if(x>h[j])
	        {
	            last=j+1;
	        }
	    }
	    printf("%d\n",last);
	}
	return 0;
}