//x,y --> coordinates of a new student
//x,y can be increased or decreased exactly by 'k' in 1 move/operation
#include <stdio.h>
int main(void)
{
	int t;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    int x,y,k;
	    scanf("%d %d %d",&x,&y,&k);
	    if( ((x%k) == 0) && ((y%k) == 0) )
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